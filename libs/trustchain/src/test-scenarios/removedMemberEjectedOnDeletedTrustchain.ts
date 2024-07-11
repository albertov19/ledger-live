import { getEnv } from "@ledgerhq/live-env";
import Transport from "@ledgerhq/hw-transport";
import { getSdk } from "..";

export async function scenario(transport: Transport) {
  const applicationId = 16;

  // first member initializes itself
  const name1 = "Member 1";
  const sdk1 = getSdk(!!getEnv("MOCK"), { applicationId, name: name1 });
  const member1creds = await sdk1.initMemberCredentials();
  // second member initializes itself
  const name2 = "Member 2";
  const sdk2 = getSdk(!!getEnv("MOCK"), { applicationId, name: name2 });
  const member2creds = await sdk2.initMemberCredentials();
  const member2 = { name: name2, id: member2creds.pubkey, permissions: 0xffffffff };

  // auth with the device and init the first trustchain
  const { trustchain } = await sdk1.getOrCreateTrustchain(transport, member1creds);

  // member 1 adds member 2 (= qr code flow)
  await sdk1.addMember(trustchain, member1creds, member2);

  // member2 can get the members
  await sdk2.getMembers(trustchain, member2creds);

  // member1 removes trustchain
  await sdk1.destroyTrustchain(trustchain, member1creds);

  // force a refresh to happen (which normally happen after some time)
  await sdk2.withAuth(trustchain, member2creds, jwt => Promise.resolve(jwt), "refresh");

  // member2 is no longer a member so is not authorized to get the members
  await expect(sdk2.getMembers(trustchain, member2creds)).rejects.toThrow();
}
