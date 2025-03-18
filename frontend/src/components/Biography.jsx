import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className='banner'>
        <img src={imageUrl} alt='aboutIMG' />
      </div>
      <div className="banner">
        <p>
          Biography
        </p>
        <h3> Who Are We?</h3>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus tempora dicta, similique corporis sint iste tenetur id praesentium accusamus quidem rerum maiores. Reprehenderit ex porro delectus odio officia odit!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officiis! Culpa ipsum repellat reprehenderit aliquam et ratione suscipit nostrum voluptates, velit amet reiciendis vero maxime!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque omnis, soluta ab consectetur voluptatum accusamus?</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  )
}

export default Biography