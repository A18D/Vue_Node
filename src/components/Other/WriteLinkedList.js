import React, {PureComponent} from 'react';
import {DoublyList} from 'libs/DataStructures/LinkedList.js';

export class WriteLinkedList extends PureComponent {
  constructor (props) {
    super (props);

    this.DL = new DoublyList ();
  }

  handleAddToFirst = e => {
    const idTag = 'Element';
    let tagInput = document.getElementById (idTag);
    this.DL.AddFirst (tagInput.value);
    this.OutputList ();
  };

  handleAddToLast = e => {
    const idTag = 'Element';
    let tagInput = document.getElementById (idTag);
    this.DL.AddLast (tagInput.value);
    this.OutputList ();
  };

  handleRemoveAt = e => {
    const idTag = 'NumberPosition';
    let tagInput = document.getElementById (idTag);
    this.DL.RemoveAt (tagInput.value);
    this.OutputList ();
  };

  handleSortBubble = e => {
    this.DL.SortBubble ();
    this.OutputList ();
  };

  handleGenerateList = e => {
    this.DL = new DoublyList ();

    for (let i = 0; i < 6; i++) {
      let j = this.randomInteger (0, 10);
      this.DL.AddFirst (j);
    }

    this.OutputList ();
  };

  OutputList = () => {
    const idTag = 'LinkedList';
    let tagOutput = document.getElementById (idTag);
    tagOutput.textContent = this.DL.toString ();

    let i = 3;
    let j = 0;

    // в цикле for будем перебирать массив tasks, который находится в объекте taskList
    for (let dataNode of this.DL) {
      //console.log ('dataNode = ' + dataNode);

      if (i == j) {
        //alert ('dataNode = ' + dataNode);
        //console.log ('Победитель');
      }

      j++;
    }
  };

  randomInteger (min, max) {
    let rand = min + Math.random () * (max + 1 - min);
    rand = Math.floor (rand);
    return rand;
  }

  render () {
    return (
      <div class="Top40 space45">
        <p class="sizebig">
          Динамические структуры данных
        </p>
        <p>
          Двусвязный список
        </p>
        <button class="buttonGreen" onClick={this.handleAddToFirst}>
          Add to first
        </button>
        <button class="buttonGreen" onClick={this.handleAddToLast}>
          Add to last
        </button>

        <button class="buttonGreen" onClick={this.handleGenerateList}>
          Generate list
        </button>

        <button class="buttonGreen" onClick={this.handleSortBubble}>
          Sort bubble list
        </button>

        <button class="buttonGreen" onClick={this.handleRemoveAt}>
          Remove at
        </button>

        <div class="HorizontalContainer Top40 bottom0">
          <p>Enter the value:</p>
          <input type="text" id="Element" />

          <p class="space45">Номер позиции для удаления:</p>
          <input type="text" id="NumberPosition" />
        </div>
        <p id="LinkedList" />

      </div>
    );
  }
}
