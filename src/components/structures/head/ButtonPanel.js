import React from 'react';
import {Button} from "semantic-ui-react";

// const ButtonPanel = () => (
//     <Button.Group fluid buttons={['День', 'Неделя', 'Месяц', 'Год']} />
// );

const ButtonPanel = () => (
    <Button.Group fluid>
        <Button href='/day'>День</Button>
        <Button href='/week'>Неделя</Button>
        <Button href='/month'>Месяц</Button>
        <Button href='/year'>Год</Button>
    </Button.Group>
);


export default ButtonPanel;
