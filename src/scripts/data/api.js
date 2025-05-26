import { getAccessToken } from '../utils/auth.js';
import { BASE_URL } from '../config.js';

const ENDPOINTS = {
  // Auth
  REGISTER: `${BASE_URL}register`,
  LOGIN: `${BASE_URL}login`,

  // trapkan ML
  RECOMMENDATION: `${BASE_URL}recommendation`,
};

//Post Register
export async function postRegister({ name, email, username, password }) {
  const data = JSON.stringify({ name, email, username, password });

  const fetchResponse = await fetch(ENDPOINTS.REGISTER, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}

// Post Login
export async function postLogin({ username, password }) {
  const data = JSON.stringify({ username, password });

  const fetchResponse = await fetch(ENDPOINTS.LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}

// Post Recommendation
export async function postRecommendation({ options }) {
  const data = JSON.stringify({ options });

  const fetchResponse = await fetch(ENDPOINTS.RECOMMENDATION, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  });

  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}
