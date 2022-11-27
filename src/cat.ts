// import * as streams from "https://deno.land/std@0.166.0/streams/mod.ts";

console.log(Deno.args);

if (Deno.args.length == 0) {
  console.log("Reading from stdin")
} else {
  console.log("reading from args")
}
