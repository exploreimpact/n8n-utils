function parseBool(value, fallback = false) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value === 1;
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (!normalized) return fallback;
    return ['true', '1', 'yes', 'ja', 'on'].includes(normalized);
  }
  return fallback;
}

function parseString(value, fallback = null) {
  return String(value ? String(value) : fallback).trim();
}

module.exports = {
  parseBool,
  parseString,
};