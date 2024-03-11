import initWebAssemblyModule, { add } from './wasm/build/pitch_detector';

export class TestModule {
    private _isInitialized = false;

    public async initialize() {
        if (this._isInitialized) {
            return;
        }
        try {
            await initWebAssemblyModule();
            this._isInitialized = true;
        } catch (error) {
            console.error('Failed to initialize WebAssembly module', error);
        }
    }

    public add(a: number, b: number): number {
        if (!this._isInitialized) {
            throw new Error('Module is not initialized');
        }
        return add(a, b);
    }
}
