import React from 'react'

const Place = (props) => {
  return (
    <div className="Place">
      <section>
        <img className="placePhoto" src={props.imageUrl} alt="" />
      </section>

      <section className='secondSection'>
        <article className='firstArticle'>
          <img className="mapPointer" src="" alt="" />
          <h3>{props.location}</h3>
          <a className="link" href={props.googleMapsUrl}>
            View on GoogleMaps
          </a>
        </article>

        <article>
          <h2>{props.title}</h2>
          <p>
            <b>
              {props.startDate}-{props.endDate}
            </b>
          </p>
          <p>{props.description} </p>
        </article>
      </section>
    </div>
  );
}

export default Place
