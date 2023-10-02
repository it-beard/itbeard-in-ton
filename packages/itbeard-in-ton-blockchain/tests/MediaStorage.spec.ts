import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { toNano } from 'ton-core';
import { MediaStorage } from '../wrappers/MediaStorage';
import '@ton-community/test-utils';

describe('MediaStorage', () => {
    let blockchain: Blockchain;
    let mediaStorage: SandboxContract<MediaStorage>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        mediaStorage = blockchain.openContract(await MediaStorage.fromInit());

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await mediaStorage.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: mediaStorage.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and mediaStorage are ready to use
    });
});
