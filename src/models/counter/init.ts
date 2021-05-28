import { $count, dec, inc } from ".";

$count.on(inc, (c) => ++c).on(dec, (c) => --c);
