import { Socket } from 'socket.io';
import { Socket as SocketModel } from './models/sockets.model';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Chatting } from './models/chattings.model';
import { Model } from 'mongoose';
export declare class ChatsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly chattingModel;
    private readonly socketModel;
    private logger;
    constructor(chattingModel: Model<Chatting>, socketModel: Model<SocketModel>);
    afterInit(): void;
    handleDisconnect(socket: Socket): Promise<void>;
    handleConnection(socket: Socket): void;
    handleNewUser(username: string, socket: Socket): Promise<string>;
    handleSubmitChat(chat: string, socket: Socket): Promise<void>;
}
