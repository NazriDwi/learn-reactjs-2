import React from 'react';
import { Button, ButtonGroup} from 'reactstrap';

export default class ButtonGroup2 extends React.Component{
    render(){
        return(
            
            <ButtonGroup>
                <Button>Left</Button>
                <Button>Midle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        )
    }
}