React & Redux
=====================
This is a test single page application.
Author: A18D

```javascript


```

Demo
-------------
[Demo](https://a18d.github.io/#/)

[SRC](https://github.com/A18D/Test.git)


#### Installation
Run this npm command to install dependencies.
```
$ npm install
```

#### Build
Run this npm command to build the JavaScript Bundle
```
$ npm run build
$ yarn run build

```

#### Run
Run this npm command to build the JavaScript Bundle and open the browser to the app using the file api.
```
$ npm start
$ set Debug=true && npm start
$ set Debug=true && yarn run dev

```

Delete packet
-------------
local packet:
npm uninstall http-server

global packet:
npm uninstall http-server -g

#### Описание проекта:
=====================
Реализовать панель управления контентом в виде таблицы. Смысловая нагрузка следующая: панель управления позволяет HR-менеджерам вести и обрабатывать данные о сотрудниках. Реализовать в виде таблицы с полями:

<li> ФИО
<li> Должность
<li> Оклад
<li> Статус (соискатель/сотрудник/уволен)
<li> Дата приема на работу

Каждое поле должно иметь возможность меняться непосредственно в таблице. Параллельно может работать неограниченное кол-во HR. Данные, вносимые другими HR, должны моментально отображаться у всех. Должны быть учтены исключения и конфликтные ситуации (когда HR пытается изменить поле, данные которого у него не актуальны или когда 2 HR пытаются редактировать одно и то же поле). Так-же требуется хранить данные в кеше браузера (LocalStorag, IndexedDB), пока они не утеряют свою актуальность. Поддержка актуальности кеша. Требуется минимизировать количество данных, передаваемых по сети.

#### Технологии:<br>

<li>Сервер: NodeJS (можно использовать без базы данных, а хранить все данные в памяти).<br>
<li>Клиент: VueJS + Vuex<br>
<li>Протокол обмена: WebSocket<br>
