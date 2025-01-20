import { it, expect, describe } from 'vitest';
import { levenshteinDistance as ld } from '../index.js';

describe('str-utils Distance - Simple test', () => {
  // Simple test
  it('Distance for two identical (2-letter strings): "ab" vs "ab"', () => {
    const distance = ld('ab', 'ab');
    expect(distance).toStrictEqual(0);
  });

  it('Distance for two completely different (2-letter strings): "ab" vs "cd"', () => {
    const distance = ld('ab', 'cd');
    // ab -> cb (a -> c)
    // cb -> cd (b -> d)
    // Total = 2
    expect(distance).toStrictEqual(2);
  });

  it('Distance with one substitution (3-letter strings): "cat" vs "cut"', () => {
    const distance = ld('cat', 'cut');
    // cat -> cut (a -> u)
    expect(distance).toStrictEqual(1);
  });

  it('Distance with one deletion (3-letter strings): "dog" vs "do"', () => {
    const distance = ld('dog', 'do');
    // dog -> do (remove g)
    expect(distance).toStrictEqual(1);
  });

  it('Distance with one substitution (4-letter strings): "test" vs "tent"', () => {
    const distance = ld('test', 'tent');
    // test -> tent (s -> n)
    expect(distance).toStrictEqual(1);
  });

  it('Distance with two substitutions: "abcd" vs "abdc" (4-letter strings)', () => {
    const distance = ld('abcd', 'abdc');
    // abcd -> abdd (c -> d)
    // abdd -> abdc (d -> c)
    // Total = 2
    expect(distance).toStrictEqual(2);
  });

  it('Distance with one substitution (5-letter strings): "happy" vs "nappy "', () => {
    const distance = ld('happy', 'nappy');
    // happy -> nappy (h -> n)
    expect(distance).toStrictEqual(1);
  });

  it('Distance with one deletion (5-letter strings): "plane" vs "lane"', () => {
    const distance = ld('plane', 'lane');
    // plane -> lane (remove p)
    expect(distance).toStrictEqual(1);
  });

  it('Distance with one substitution (6-letter strings): "kitten" vs "sitten"', () => {
    const distance = ld('kitten', 'sitten');
    // kitten -> sitten (k -> s)
    expect(distance).toStrictEqual(1);
  });

  it('Distance with one substitution (8-letter strings): "computer" vs "commuter"', () => {
    const distance = ld('computer', 'commuter');
    // computer -> commuter (p -> m)
    expect(distance).toStrictEqual(1);
  });

  it('Distance with one deletion (10-letter strings): "playground" vs "playround"', () => {
    const distance = ld('playground', 'playround');
    // playground -> playround (remove g)
    expect(distance).toStrictEqual(1);
  });

  it('Distance with two substitutions (10-letter strings): "abcdefghij" vs "abxdxfghij"', () => {
    const distance = ld('abcdefghij', 'abxdxfghij');
    // abcdefghij -> abxdefghij (c -> x)
    // abxdefghij -> abxdxfghij (e -> x)
    // Total = 2
    expect(distance).toStrictEqual(2);
  });

  it('Classic example (multiple edits): "kitten" vs "sitting"', () => {
    const distance = ld('kitten', 'sitting');
    //  kitten -> sitten (k -> s)
    // sitten -> sittin (e -> i)
    // sittin -> sitting (+g)
    expect(distance).toStrictEqual(3);
  });
});

describe('str-utils Distance - Complex test', () => {
  it('Distance with one substitution: "Lorem ipsum" vs "Lorem ipxum"', () => {
    // ipsum -> ipxum (s -> x)
    // Total = 1
    const distance = ld('Lorem ipsum', 'Lorem ipxum');
    expect(distance).toStrictEqual(1);
  });

  it('Distance with two substitutions: "Lorem ipsum dolor" vs "Loren ipsum dotor"', () => {
    // Lorem -> Loren (m -> n)
    // dolor -> dotor (l -> t)
    // Total = 2
    const distance = ld('Lorem ipsum dolor', 'Loren ipsum dotor');
    expect(distance).toStrictEqual(2);
  });

  it('Distance with one insertion: "Lorem ipsum dolor sit amet" vs "Lorem ipsum dolor site amet"', () => {
    // sit -> site (+ e)
    // Total = 1
    const distance = ld(
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor site amet',
    );
    expect(distance).toStrictEqual(1);
  });

  it('Multiple edits: "Lorem ipsum dolor sit amet" vs "Loremo opsum dlor st amte"', () => {
    // Possible breakdown:
    // Lorem  -> Loremo (+ o)
    // ipsum  -> opsum  (i -> o)
    // dolor  -> dlor   (- o)
    // sit    -> st     (- i)
    // amet   -> amtt   (e -> t)
    // amtt   -> amte   (t -> e)
    // Total = 1 + 1 + 1 + 1 + 1 + 1 = 6
    const distance = ld(
      'Lorem ipsum dolor sit amet',
      'Loremo opsum dlor st amte',
    );
    expect(distance).toStrictEqual(6);
  });

  it('Sentence-level edits: "Lorem ipsum dolor sit amet" vs "Loreum ippsun dolr sit ament"', () => {
    const distance = ld(
      'Lorem ipsum dolor sit amet',
      'Loreum ippsun dolr sit ament',
    );
    expect(distance).toStrictEqual(5);
  });

  it('Sentence-level edits: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." vs "Lorem ipzum dolor sit amt, consetetur adipiscing elt."', () => {
    const distance = ld(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipzum dolor sit amt, consetetur adipiscing elt.',
    );
    expect(distance).toStrictEqual(4);
  });

  it('Larger chunk with multiple edits: "Lorem ipsum dolor sit amet consectetur" vs "Lorems ipsum dolor si amet consetetur"', () => {
    const distance = ld(
      'Lorem ipsum dolor sit amet consectetur',
      'Lorems ipsum dolor si amet consetetur',
    );
    expect(distance).toStrictEqual(3);
  });

  it('Rearranging and modifying words: "Lorem ipsum" vs "ipsum Lorem"', () => {
    const distance = ld('Lorem ipsum', 'ipsum Lorem');
    expect(distance).toStrictEqual(8);
  });
});
