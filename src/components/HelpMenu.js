import { Button, Tooltip } from 'antd';
import { useTestContext } from './TestContext';
import { OBJ_LIST, formatTime } from '../constants/config';


function HelpMenu() {
    const { 
        APP_STAGE, APP_COMP, setCurrComp, stageRef, objHoverOn, 
        objRef, backCheckingInstruction, mousePosRef, questionId, csvDataBuf,
    } = useTestContext();

    const isTestStage = [APP_STAGE.test_main, APP_STAGE.test_supp].includes(stageRef.current);
    
    const handleMouseEnter = () => {
        if (![APP_STAGE.test_main, APP_STAGE.test_supp].includes(stageRef.current)) {
            return;
        }
        objHoverOn.current = 'HELP';
    };

    const handleMouseLeave = () => {
        if (![APP_STAGE.test_main, APP_STAGE.test_supp].includes(stageRef.current))  {
            return;
        }
        objHoverOn.current = 'none';
    };

    const button_s = {
        position: 'absolute',
        top: '60px',
        right: '80px',
        fontSize: 32,
        fontWeight: 'bolder',
        color: 'rgb(255, 255, 255)',
        width: 60,
        height: 60,
        padding: 0,
        textAlign: 'center',
        border: '5px solid rgb(165, 197, 209)',
    };

    
    return (
        <Tooltip
            title="Review Instructions"
            placement="left"
            mouseEnterDelay={0.15}
            mouseLeaveDelay={0.05}
            disabled={!isTestStage}
        >
            <Button
                ref={(el) => (objRef.current.HELP = el)}
                type="primary"
                shape="circle"
                aria-label="Review Instructions"
                onClick={() => {

                    // Write data [instruction review]
                    csvDataBuf.current.push([
                        `Q${questionId.current + 1}`,
                        formatTime(),
                        mousePosRef.current.x,
                        mousePosRef.current.y,
                        OBJ_LIST.HELP,
                        1,
                    ]);

                    backCheckingInstruction.current = true;
                    setCurrComp(APP_COMP.instruction);
                }}
                style={button_s}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                ?
            </Button>
        </Tooltip>
    );
}

export default HelpMenu;