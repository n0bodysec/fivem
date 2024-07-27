/* eslint-disable @typescript-eslint/no-explicit-any */

declare function emitNet(eventName: string, target: number | string, ...args: any[]): void;
declare function TriggerClientEvent(eventName: string, target: number | string, ...args: any[]): void;
declare function TriggerLatentClientEvent(eventName: string, target: number | string, bps: number, ...args: any[]): void;

declare function getPlayerIdentifiers(player: number | string): string[];
declare function getPlayerTokens(player: number | string): string[];
declare function getPlayers(): string[];
