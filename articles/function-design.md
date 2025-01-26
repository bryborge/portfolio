---
title: "Function Design Recipe"
date: "1-3-2025"
description: "Stop struggling to write functions"
category: "Programming"
---

## Overview

1. Define the function's *signature, purpose,* and *stub*
2. Describe the desired behavior with examples
3. Write the function's template and reflect on the results of steps **1** and **2**
4. Code the function body
5. Test, debug, and refactor

## Example (in Ruby)

**Criteria:** Write a function that consumes a number and produces twice that number. Call your function **double**.

1. Define the function's signature, purpose, and stub.
  ```ruby
  # Signature - `Number -> Number` (consumes a number and outputs a number)
  # Purpose   - Doubles the number given
  # Stub      - `def double(n) 0; end`
  ```
2. Describe the desired behavior with examples.
  ```ruby
  double(0)
  # => 0

  double(1)
  # => 2

  double(88)
  # => 176
  ```
3. Write the function's template and reflect on the results of steps **1** and **2**.
  ```ruby
  def double(n)
    # 1. find a way to double the value of n
    # 2. return that value
  end
  ```
4. Code the function body.
  ```ruby
  def double(n)
    double_n = n * 2
    double_n
  end
  ```
5. Test, debug, ...
  ```ruby
  require 'minitest/autorun'

  class DoubleTest < Minitest::Test
    def test_double_positive_number
      assert_equal 4, double(2)
    end

    def test_double_zero
      assert_equal 0, double(0)
    end

    def test_double_negative_number
      assert_equal -4, double(-2)
    end
  end
  ```

  ... and refactor!

  ```ruby
  def double(n)
    n * 2
  end
  ```

Happy coding!
