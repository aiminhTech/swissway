import { ManagedRuntime, Layer } from "effect";
import { FetchHttpClient } from "@effect/platform";
import { Effect } from "effect/Effect";

const RuntimeLayer = Layer.mergeAll(FetchHttpClient.layer);

const runtime = ManagedRuntime.make(RuntimeLayer);

export type RuntimeEnv = Layer.Layer.Success<typeof RuntimeLayer>;

export function runPromise<A, E>(effect: Effect<A, E, RuntimeEnv>): Promise<A> {
  return runtime.runPromise(effect);
}

export function runSync<A, E>(effect: Effect<A, E, RuntimeEnv>): A {
  return runtime.runSync(effect);
}
