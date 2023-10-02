import { toNano } from 'ton-core';
import { MediaStorage } from '../wrappers/MediaStorage';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const mediaStorage = provider.open(await MediaStorage.fromInit());

    await mediaStorage.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(mediaStorage.address);

    // run methods on `mediaStorage`
}
