const dns = require('dns');
const { promisify } = require('util');

const resolverAsync = promisify(dns.resolve4);

async function main() {
    try {
        const addresses = await resolverAsync('www.mum.edu');
        console.log(addresses);
    } catch (e) {
        console.log(e);
    }
}

console.log("start");
main();
console.log("End");