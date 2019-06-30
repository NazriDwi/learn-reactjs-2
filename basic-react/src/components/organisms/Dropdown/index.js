import React, {Component} from 'react';
import  {ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Button} from 'reactstrap';

export default class OrganismsButtonDropdown extends Component{
    constructor(props){
        super(props);

        this.state={
            dropdownOpen:false
        }
    }

    toggle=()=> {
        this.setState({
            dropdownOpen:!this.state.dropdownOpen
        })
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                ButtonDropdown
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divier />
                    <DropdownItem> Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}