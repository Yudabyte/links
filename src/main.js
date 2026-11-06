import './style.css';
import { profile, links } from './links.js';

document.title = `${profile.name} — official links`;

const app = document.getElementById('app');
const platformMarks = { Instagram: 'IG', YouTube: 'YT', WhatsApp: 'WA', Sociabuzz: 'SB', Discord: 'DC' };

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function createLinkItem(item, index) {
  const itemElement = document.createElement('li');
  const link = document.createElement('a');
  link.href = item.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `${item.label}: ${item.note}`);

  const indexLabel = createElement('span', 'link-index', String(index + 1).padStart(2, '0'));
  indexLabel.setAttribute('aria-hidden', 'true');
  const mark = createElement('span', 'platform-mark', platformMarks[item.label] || '→');
  mark.setAttribute('aria-hidden', 'true');
  const copy = createElement('span', 'link-copy');
  copy.append(createElement('span', 'label', item.label), createElement('span', 'note', item.note));
  const arrow = createElement('span', 'link-arrow', '↗');
  arrow.setAttribute('aria-hidden', 'true');
  link.append(indexLabel, mark, copy, arrow);
  itemElement.append(link);
  return itemElement;
}

const page = createElement('div', 'page-shell');
const topbar = createElement('div', 'topbar');
topbar.append(createElement('span', 'wordmark', 'YNL / 2026'), createElement('span', 'presence', 'Digital home base'));

const header = document.createElement('header');
const eyebrow = createElement('p', 'eyebrow', profile.greeting);
const identity = createElement('div', 'identity');
const monogram = createElement('span', 'monogram', 'YN');
monogram.setAttribute('aria-hidden', 'true');
const title = document.createElement('h1');
title.textContent = profile.name;
identity.append(monogram, title);
const bio = createElement('p', 'bio', profile.bio);
const details = createElement('div', 'details');
const status = createElement('span', 'status-dot');
status.setAttribute('aria-hidden', 'true');
details.append(status, createElement('span', '', 'Temukan saya di ruang yang tepat.'));
header.append(eyebrow, identity, bio, details);

const nav = document.createElement('nav');
nav.setAttribute('aria-label', 'Link resmi');
const navHeader = createElement('div', 'nav-header');
navHeader.append(createElement('h2', '', 'Pilih tujuan'), createElement('span', 'link-total', `${String(links.length).padStart(2, '0')} link`));
const list = document.createElement('ul');
links.forEach((item, index) => list.append(createLinkItem(item, index)));
nav.append(navHeader, list);

const footer = document.createElement('footer');
footer.append(createElement('span', '', '© 2026 yudaNeverLose'), createElement('span', '', 'Made for the curious'));
page.append(topbar, header, nav, footer);
app.append(page);
