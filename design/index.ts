import './styles.scss';
import 'bootstrap.native';
import hotroute from 'hotroute';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

library.add(faGithub, faTwitter, faLinkedin, faEnvelope);
dom.watch();

(() => {
  const router = hotroute({ log: true, prefetch: true });
})();
