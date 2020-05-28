import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src/components/Button';

storiesOf('Button', module).add('Default', () =>( 
  <Button backgroundColor="#e02041" color="#fff">
    Teste
  </Button> ));