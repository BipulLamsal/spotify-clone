import React from 'react'


function Menu({title, menuObject}) {
  return (
    <div className='menuContainer'>
        <p className='title'>{title} </p>
        <ul>
        {menuObject &&
          menuObject.map((li) => (
            <li key={li.id}>
              <a href="#">
                <i>{li.icon}</i>
                <span> {li.name}</span>
              </a>
            </li>
          ))}
      </ul>

    </div>
  )
}

export {Menu};