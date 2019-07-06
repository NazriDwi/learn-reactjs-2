import React from 'react';
import { storiesOf} from '@storybook/react';

import Dropdown from '.';

storiesOf('organisms/ Dropdown', module)
.add('example',() =>{
    return(
        <Dropdown/>
    )
})