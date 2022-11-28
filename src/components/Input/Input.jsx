import PropTypes from 'prop-types';

import { Input } from '../Form/Form.styled';

export const InputElement = props => {
  return <Input {...props} />;
};

InputElement.protoType = {
  props: PropTypes.object.isRequired,
};
