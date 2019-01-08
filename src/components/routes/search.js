import React, {PureComponent} from 'react';
import {render} from 'react-dom';
import {PageTemplate} from './pageTemplate';
import history from '../../history';
import {BubbleSort} from 'libs/sort.js';
import {WriteLinkedList} from '../Other/WriteLinkedList';

var timers = {};

// прибавит время выполнения f к таймеру timers[timer]
function timingDecorator (f, timer) {
  return function () {
    var start = performance.now ();
    console.dir (this);
    console.dir (arguments);

    var result = f.apply (this, arguments); // (*)

    if (!timers[timer]) timers[timer] = 0;
    timers[timer] += performance.now () - start;

    return result;
  };
}

export class Search extends React.Component {
  goBackToPath () {
    history.goBack ();
  }

  pushWebinarToPath () {
    history.push ('./#/Webinar');
    history.go ();
  }

  handlerFibonachi () {
    // функция может быть произвольной, например такой:
    var fibonacci = function f (n) {
      return n > 2 ? f (n - 1) + f (n - 2) : 1;
    };

    // использование: завернём fibonacci в декоратор
    fibonacci = timingDecorator (fibonacci, 'fibo');
    // неоднократные вызовы...
    alert (fibonacci (10)); // 55
    alert (fibonacci (20)); // 6765
    // ...

    // в любой момент можно получить общее количество времени на вызовы
    alert (timers.fibo + 'мс');
  }

  handlerBubbleSort () {
    let num_array = [4, 3, 7, 1, 9];
    BubbleSort (num_array);
  }

  handlerclosure () {
    var co = this.makeCounter ();

    alert (co ()); // 1
    alert (co ()); // 2
  }

  makeCounter () {
    var currentCount = 1;

    // возвращаемся к функции
    function counter () {
      return currentCount++;
    }

    // ...и добавляем ей методы!
    counter.set = function (value) {
      currentCount = value;
    };

    counter.reset = function () {
      currentCount = 1;
    };

    return counter;
  }

  test () {
    
    var a = {}, b = {key: 'b'}, c = {key: 'c'};

    a[b] = 123;
    a[c] = 456;

    console.log (a[b]);

    var foo = {n: 1};
    var bar = foo;
    foo.x = foo = {n: 2};

    let str = `Hello world`;
    let arr = Array.prototype.slice.call (str);
    arr.forEach ((item, i) => {
      console.log (`Element № ${i} = ${item}`);
    });

  }

  render () {
    //Такой синтаксис гарантирует, что "this" привязан к onLog
    return (
      <PageTemplate>
        <section>
          <h1>Search the information</h1>
          <div id="menu-training" />

          <button onClick={e => this.handlerBubbleSort (e)}>Bubble sort</button>
          <button onClick={e => this.handlerFibonachi (e)}>Фибоначчи</button>
          <button onClick={e => this.goBackToPath (e)}>go back</button>

          <button onClick={e => this.test (e)}>test</button>

          <button onClick={e => this.pushWebinarToPath (e)}>
            push webinar to path
          </button>
          <button onClick={e => this.handlerclosure (e)}>Closure</button>

          <WriteLinkedList />
        </section>
      </PageTemplate>
    );
  }
}
