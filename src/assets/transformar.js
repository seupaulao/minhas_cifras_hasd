import { createInterface } from 'readline';
import { createReadStream } from 'fs';

async function lerLinhaPorLinha() {
  const stream = createReadStream('base1.txt', 'utf8');

  const rl = createInterface({
    input: stream,
    crlfDelay: Infinity // trata corretamente \r\n (Windows)
  });


  for await (const linha of rl) {
    const p1 = linha.split(":");
    const p2 = p1[1].split(" - ");

    const item = "{\"id\": \"" + p1[0]+ "\", \"titulo\": \"" + p2[1] +  "\"},"

    console.log(item);
  }

  console.log('Leitura finalizada!');
}

lerLinhaPorLinha();