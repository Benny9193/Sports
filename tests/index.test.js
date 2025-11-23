/**
 * Basic test file for Sports Application Backend
 */

const sportsModel = require('../src/models/sports.model');

console.log('Running Sports API Tests...\n');

let testsPassed = 0;
let testsFailed = 0;

function test(name, fn) {
    try {
        fn();
        console.log(`✓ ${name}`);
        testsPassed++;
    } catch (error) {
        console.log(`✗ ${name}`);
        console.log(`  Error: ${error.message}`);
        testsFailed++;
    }
}

function assertEquals(actual, expected, message) {
    if (actual !== expected) {
        throw new Error(message || `Expected ${expected} but got ${actual}`);
    }
}

function assertTruthy(value, message) {
    if (!value) {
        throw new Error(message || 'Expected truthy value');
    }
}

// Test Sports Model
console.log('Testing Sports Model:');

test('getAllSports returns data', () => {
    const sports = sportsModel.getAllSports();
    assertTruthy(sports, 'Should return sports data');
    assertTruthy(sports.team, 'Should have team category');
    assertTruthy(sports.individual, 'Should have individual category');
});

test('getCategories returns array', () => {
    const categories = sportsModel.getCategories();
    assertTruthy(Array.isArray(categories), 'Should return an array');
    assertTruthy(categories.length > 0, 'Should have categories');
    assertTruthy(categories[0].id, 'Categories should have id');
    assertTruthy(categories[0].title, 'Categories should have title');
});

test('getSportsByCategory returns correct category', () => {
    const teamSports = sportsModel.getSportsByCategory('team');
    assertTruthy(teamSports, 'Should return team sports');
    assertEquals(teamSports.title, 'Team Sports', 'Should have correct title');
    assertTruthy(teamSports.subcategories, 'Should have subcategories');
});

test('getSportsByCategory returns null for invalid category', () => {
    const invalid = sportsModel.getSportsByCategory('invalid');
    assertEquals(invalid, null, 'Should return null for invalid category');
});

test('searchSports finds sports by name', () => {
    const results = sportsModel.searchSports('football');
    assertTruthy(Array.isArray(results), 'Should return an array');
    assertTruthy(results.length > 0, 'Should find results');
    assertTruthy(results[0].sports, 'Results should have sports');
});

test('searchSports finds sports by description', () => {
    const results = sportsModel.searchSports('swimming');
    assertTruthy(Array.isArray(results), 'Should return an array');
    assertTruthy(results.length > 0, 'Should find results');
});

test('searchSports returns empty array for no matches', () => {
    const results = sportsModel.searchSports('xyzabc123');
    assertTruthy(Array.isArray(results), 'Should return an array');
    assertEquals(results.length, 0, 'Should have no results');
});

test('getAllSportsFlat returns flat array', () => {
    const sports = sportsModel.getAllSportsFlat();
    assertTruthy(Array.isArray(sports), 'Should return an array');
    assertTruthy(sports.length > 0, 'Should have sports');
    assertTruthy(sports[0].name, 'Sports should have name');
    assertTruthy(sports[0].description, 'Sports should have description');
    assertTruthy(sports[0].category, 'Sports should have category');
    assertTruthy(sports[0].categoryTitle, 'Sports should have categoryTitle');
});

// Summary
console.log('\n' + '='.repeat(50));
console.log(`Tests Passed: ${testsPassed}`);
console.log(`Tests Failed: ${testsFailed}`);
console.log('='.repeat(50));

if (testsFailed > 0) {
    process.exit(1);
}

console.log('\n✓ All tests passed!');
