// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


Debug = debug.Debug;

Debug.disable();
assertThrows("Debug.scripts()");

Debug.enable();
assertDoesNotThrow("Debug.scripts()");