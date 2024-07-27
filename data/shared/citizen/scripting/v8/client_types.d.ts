/* eslint-disable @typescript-eslint/no-explicit-any */

interface CitizenInterface
{
	invokeNativeRaw(abv: ArrayBuffer, off: number): void;
}

declare function emitNet(eventName: string, ...args: any[]): void;
declare function TriggerServerEvent(eventName: string, ...args: any[]): void;
declare function TriggerLatentServerEvent(eventName: string, bps: number, ...args: any[]): void;

declare function SendNUIMessage(data: any): void;

declare let LocalPlayer: EntityInterface;
