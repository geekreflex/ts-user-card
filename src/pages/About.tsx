import React, { useRef, useState } from 'react';

const About = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(['item 1', 'item 2', 'item 3', 'item 4']);

  const dragStart = (e: any, position: any) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e: any, position: any) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e: any) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <div>
      {list &&
        list.map((item, index) => (
          <div
            style={{
              backgroundColor: 'lightblue',
              margin: '20px 25%',
              textAlign: 'center',
              fontSize: '40px',
            }}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
          >
            {item}
          </div>
        ))}
    </div>
  );
};

export default About;
