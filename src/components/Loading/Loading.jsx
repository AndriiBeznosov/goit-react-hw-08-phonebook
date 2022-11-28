import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';

import { Wrapper } from './Loading.styled';

export const Loading = ({ visible }) => {
  return (
    <Wrapper>
      <div>
        <RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={visible}
        />
      </div>
    </Wrapper>
  );
};

Loading.propTypes = {
  visible: PropTypes.bool.isRequired,
};
