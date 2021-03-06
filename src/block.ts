import * as crypto from 'crypto';
import Transaction from './transaction';

export default class Block {
  public nonce = Math.round(Math.random() * 999999999);

  constructor(
    public prevHash: string | null,
    public transaction: Transaction,
    public ts = Date.now()
  ) {}

  get hash() {
    const str = JSON.stringify(this);
    const hash = crypto.createHash('SHA256');

    hash.update(str).end();
    return hash.digest('hex');
  }
}
