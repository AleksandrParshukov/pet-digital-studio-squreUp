import './CallbackSection.scss';
import './form.scss';
import { useState } from 'react';
import { getTrackBackground, Range } from 'react-range';

export function CallbackSection() {
  return (
    <section className="callback">
      <div className="wrapper">
        <form className="callback__form form" action="">
          <div className="form__row">
            <div className="form__group">
              <label htmlFor="fname" className="form__label">
                Full Name
              </label>
              <input className="form__input" type="text" name="fname" id="fname" placeholder="Type here" />
            </div>

            <div className="form__group">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input className="form__input" type="email" name="email" id="email" placeholder="Type here" />
            </div>
          </div>

          <div className="form__group">
            <p className="form__label">Why are you contacting us?</p>
            <ul className="form__list">
              <li className="form__checkbox">
                <input type="checkbox" name="inquiry_type" id="inquiry_type_1" />
                <label htmlFor="inquiry_type_1">Web Design</label>
              </li>
              <li className="form__checkbox">
                <input type="checkbox" name="inquiry_type" id="inquiry_type_2" />
                <label htmlFor="inquiry_type_2">Collaboration</label>
              </li>
              <li className="form__checkbox">
                <input type="checkbox" name="inquiry_type" id="inquiry_type_3" />
                <label htmlFor="inquiry_type_3">Mobile App Design</label>
              </li>
              <li className="form__checkbox">
                <input type="checkbox" name="inquiry_type" id="inquiry_type_4" />
                <label htmlFor="inquiry_type_4">Others</label>
              </li>
            </ul>
          </div>

          <PriceRange />

          <div className="form__group small">
            <label htmlFor="message"></label>
            <textarea className="form__input textarea" name="message" id="message" placeholder="Type here" rows={2}></textarea>
          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

const MIN_PRICE = 0;
const MAX_PRICE = 30000;

function PriceRange() {
  const [values, set_values] = useState([MIN_PRICE, MAX_PRICE]);

  return (
    <div className="form__group">
      <p className="form__label">Your Budget</p>
      <p className="form__note">Slide to indicate your budget range</p>

      <div className="form__range-wrap">
        <Range
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={100}
          values={values}
          onChange={set_values}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="form__range"
              style={{
                ...props.style,
                background: getTrackBackground({
                  values,
                  colors: ['var(--grey-20)', 'var(--green-50)', 'var(--grey-20)'],
                  min: MIN_PRICE,
                  max: MAX_PRICE,
                }),
              }}>
              {children}
            </div>
          )}
          renderThumb={({ props, value }) => (
            <div {...props} className="form__range-thumb">
              <span className="form__range-value">{value.toLocaleString('en-US')}$</span>
            </div>
          )}
        />
        <input type="hidden" name="min_price" value={values[0]} />
        <input type="hidden" name="max_price" value={values[1]} />
      </div>
    </div>
  );
}
