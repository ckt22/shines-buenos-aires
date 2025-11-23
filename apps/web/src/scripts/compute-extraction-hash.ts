// scripts/compute-extraction-hash.ts
import { encodePacked, keccak256 } from 'viem';

// Define your extraction queries (MUST match your /compress-web-proof request)
const extractions = [
  {
    source: "response.body",
    format: "jmespath",
    query: "data.user.legacy.screen_name"
  },
  {
    source: "response.body",
    format: "jmespath",
    query: "data.user.legacy.followers_count"
  },
  {
    source: "response.body",
    format: "jmespath",
    query: "data.user.legacy.statuses_count"
  },
  {
    source: "response.body",
    format: "jmespath",
    query: "data.user.legacy.favourites_count"
  },
  {
    source: "response.body",
    format: "jmespath",
    query: "data.user.legacy.media_count"
  }
];

// Flatten into arrays
const sources = extractions.map(e => e.source);
const formats = extractions.map(e => e.format);
const queries = extractions.map(e => e.query);

// Create packed encoding (source1, format1, query1, source2, format2, query2, ...)
const types: string[] = [];
const values: string[] = [];

for (let i = 0; i < extractions.length; i++) {
  types.push("string", "string", "string");
  values.push(sources[i], formats[i], queries[i]);
}

const packed = encodePacked(types as any, values as any);
const extractionHash = keccak256(packed);

console.log('EXTRACTION_HASH=' + extractionHash);