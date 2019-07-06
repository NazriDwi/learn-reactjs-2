import React from 'react';
import { storiesOf} from '@storybook/react';

import Message from '.';

storiesOf('atoms/ Message', module)
.add('example',() =>{
    return(
        <Message/>
    )
})