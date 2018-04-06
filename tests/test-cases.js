tests({

  // Fill this in with test cases for your solution

  'palindrome': function() {
    eq("racecar", reversed_strings("racecar"));
  },
  'repeated word': function() {
    eq("albalbalb", reversed_strings("blablabla"));
  },
  'empty string': function() {
    eq("", reversed_strings(""));
  }
});
