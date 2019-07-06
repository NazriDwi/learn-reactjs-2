import React from 'react';
import { storiesOf} from '@storybook/react';

import FormGrid from '.';

storiesOf('organisms/ FormGrid', module)
.add('example',() =>{
    return(
        <FormGrid/>
    )
})