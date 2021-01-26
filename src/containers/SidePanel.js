import React from 'react';
import { DivContainerSide, Button, SpanScore, IconRoundUp, IconRoundDown } from '../styles/sidePanelStyles'

//Todo converted likes up and down
function SidePanel() {
    return (
        <DivContainerSide>
            <Button>
                <IconRoundUp />
            </Button>
            <SpanScore></SpanScore>
            <Button>
                <IconRoundDown />
            </Button>
        </DivContainerSide>
    )
}

export default SidePanel;
