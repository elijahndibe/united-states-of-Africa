import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import PropTypes from 'prop-types';

const propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired
};

export type GetInvolvedCardProps = PropTypes.InferProps<typeof propTypes>;

export default function GetInvolvedCard({
  icon,
  title,
  description,
  buttonLabel,
  link
}: GetInvolvedCardProps) {
  return (
    <div className="card bg-base-100 drop-shadow border-2 border-base-100">
      <figure>
        <img loading="lazy" src={icon} className="w-16 h-16 mx-auto mt-4" />
      </figure>
      <div className="card-body">
        <h3 className="card-title mx-auto">{title}</h3>
        <p className="line-clamp-4 text-center">{description}</p>
        <div className="card-actions">
          <Link className="btn btn-ghost normal-case gap-2 mx-auto text-primary" to={link}>
            {buttonLabel} <AiOutlinePlus />
          </Link>
        </div>
      </div>
    </div>
  );
}

GetInvolvedCard.propTypes = propTypes;
