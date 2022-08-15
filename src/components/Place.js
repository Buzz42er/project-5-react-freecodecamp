import React from 'react'

const Place = (props) => {
  return (
    <div className="Place">
      <section>
        <img className="placePhoto" src={require(`../images/${props.imageUrl}`)} alt="" />
      </section>

      <section className='secondSection'>
        <article className='firstArticle'>
        <span class="material-symbols-outlined">location_on</span>
          <h3>{props.location}</h3>
          <a className="link" href={props.googleMapsUrl}>
            View on GoogleMaps
          </a>
        </article>

        <article>
          <h2>{props.title}</h2>
          <p className='date'>
            <b>
              {props.startDate}-{props.endDate}
            </b>
          </p>
          <p className='description'>{props.description} </p>
        </article>
      </section>
    </div>
  );
}

export default Place
