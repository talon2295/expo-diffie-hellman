type encoding_t = "binary" | "hex" | "base64";
type prime_t = ArrayBuffer | number;
type mod_t = "modp1" | "modp2" | "modp5" | "modp14" | "modp15" | "modp16" | "modp17" | "modp18";

class DH {
    constructor(prime: prime_t, generator: Buffer | number[], malleable?: boolean);

    verifyError: number;
    
    setPublicKey(pub: Buffer | string, enc?: string): this;
    setPrivateKey(priv: Buffer | string, enc?: string): this;
    generateKeys(): Buffer;
    computeSecret(other: Buffer | number[]): Buffer;
    getPublicKey(enc?: string): Buffer | string;
    getPrivateKey(enc?: string): Buffer | string;
    getPrime(enc?: string): Buffer | string;
    getGenerator(enc?: string): Buffer | string;
    setGenerator(gen: Buffer | string, enc?: string): this;
}

function getDiffieHellman(mod: mod_t): DH;

function createDiffieHellman(prime: prime_t): DH;
function createDiffieHellman(prime: string, enc: encoding_t): DH;
function createDiffieHellman(prime: string, enc: encoding_t, generator: prime_t): DH;
function createDiffieHellman(prime: string, enc: encoding_t, generator: string, genc: encoding_t): DH;

export { getDiffieHellman, createDiffieHellman };