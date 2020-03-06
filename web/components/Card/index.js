import React from 'react';
import Link from 'next/Link';

import CardStyled from './styles';

class Card extends React.Component {
  render() {
    const { slug, name } = this.props;

    return (
      <CardStyled>
        <Link href={slug}>
          <a>
            <img src="" alt={`${name} component`} />
            <p className="p-small">{name}</p>
          </a>
        </Link>
      </CardStyled>
    );
  }
}

export default Card;
