import React, {Component} from 'react';
import SwaggerUi, {presets} from 'swagger-ui';
import { FormattedMessage } from 'react-intl';

class SwaggerPage extends Component {
  componentDidMount() {
    SwaggerUi({
      dom_id: '#swaggerContainer',
      spec: this.props.swaggerSpec,
      presets: [presets.apis],
      validatorUrl: null,
    });
  }

  render() {
    return (
      <div id="swaggerContainer">
        <FormattedMessage id="loading"/>
      </div>
    );
  }
}

export default SwaggerPage;
