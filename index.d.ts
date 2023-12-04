type encoding_t = "binary" | "hex" | "base64";
type prime_t = ArrayBuffer | number;
type mod_t = "modp1" | "modp2" | "modp5" | "modp14" | "modp15" | "modp16" | "modp17" | "modp18";

declare class DH {
    constructor(prime: prime_t, generator: prime_t, malleable?: boolean);

    verifyError: number;

    setPublicKey(pub: Buffer): this;
    setPublicKey(pub: string, enc: encoding_t): this;

    setPrivateKey(priv: Buffer): this;
    setPrivateKey(priv: string, enc: encoding_t): this;

    generateKeys(): Buffer;
    computeSecret(other: prime_t): Buffer;

    getPublicKey(): Buffer;
    getPublicKey(enc: encoding_t): string;

    getPrivateKey(): Buffer;
    getPrivateKey(enc: encoding_t): string;

    getPrime(): Buffer;
    getPrime(enc: encoding_t): string;

    getGenerator(): Buffer;
    getGenerator(enc: encoding_t): string;

    setGenerator(gen: Buffer): this;
    setGenerator(gen: string, enc: encoding_t): this;
}

declare function getDiffieHellman(mod: mod_t): DH;

declare function createDiffieHellman(prime: prime_t): DH;
declare function createDiffieHellman(prime: string, enc: encoding_t): DH;
declare function createDiffieHellman(prime: string, enc: encoding_t, generator: prime_t): DH;
declare function createDiffieHellman(prime: string, enc: encoding_t, generator: string, genc: encoding_t): DH;

export { getDiffieHellman, createDiffieHellman };