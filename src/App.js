import { useEffect } from 'react';
import { THEME } from './constants/config.js';
import { useTestContext } from './components/TestContext.js'
import TestLogin from './components/TestLogin.js';
import TestInstruction from './components/TestInstruction.js';
import TestRunner from './components/TestRunner.js';
import MouseEventRecorder from './components/MouseEventRecorder.js';
import MouseTrace from './components/MouseTrace.js';
import TestDataUploader from './components/TestDataUploader.js';

// Parameters for debug/develop mode
const enableModeSwitch = false;
const enableMouseTrace = false;

function App() {
    const { APP_COMP, currComp, setThemeMode } = useTestContext();
   
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!enableModeSwitch || currComp === APP_COMP.login) {
                return;
            }
            else if (e.key === '1') {
                setThemeMode(THEME.BLACK_WHITE);
            } 
            else if (e.key === '2') {
                setThemeMode(THEME.SOLID_COLOR);
            } 
            else if (e.key === '3') {
                setThemeMode(THEME.ALPHA_BLENDING);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line
    }, [currComp]);

    const currentComponent = {
        [APP_COMP.login]:       <TestLogin />,
        [APP_COMP.instruction]: <TestInstruction />,
        [APP_COMP.test]:        <TestRunner />,
        [APP_COMP.upload]:      <TestDataUploader />
    }

    return (
        <>
            {currentComponent[currComp]}
            <MouseEventRecorder />
            {enableMouseTrace && <MouseTrace />}
        </>
    );
}

export default App;
