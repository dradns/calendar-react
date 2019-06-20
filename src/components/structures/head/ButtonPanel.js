import React from 'react';
import {Button} from "semantic-ui-react";

const ButtonPanel = () => (
    <Button.Group buttons={['День', 'Неделя', 'Месяц', 'Год']} />
);

export default ButtonPanel;
