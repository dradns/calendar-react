import React from 'react';
import ButtonPanel from './head/ButtonPanel';
import CurrentCorner from './head/CurrentCorner';
import Switcher from './head/Switcher';

const Head = () => (
    <React.Fragment>
        <ButtonPanel />
        <CurrentCorner />
        <Switcher />
    </React.Fragment>
);

export default Head;