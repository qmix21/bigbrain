FROM centos:7

LABEL author="Johnathan Tiong <jt@hostopia.com.au>"

RUN rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
RUN rpm -Uvh https://centos7.iuscommunity.org/ius-release.rpm
RUN yum-config-manager --enable ius-archive

RUN yum -y install curl wget unzip git vim \
    iproute python-setuptools hostname inotify-tools yum-utils which \
    epel-release openssh-server openssh-clients

RUN yum install -y memcached libmemcached

# Install Python and Supervisor
RUN yum -y install python-setuptools \
    && mkdir -p /var/log/supervisor \
    && easy_install supervisor

# Install Apache & EXIM
RUN yum -y install httpd mod_ssl exim

# installing php 7.0
RUN yum install -y yum-plugin-replace
RUN yum install -y php70u-common php70u-cli \
        php70u-bcmath \
        php70u-mcrypt \
        php70u-ioncube-loader \
        php70u-imap \
        php70u-xml \
        php70u-mysqlnd \
        php70u-common \
        mod_php70u \
        php70u-gmp \
        php70u-json \
        php70u-gd \
        php70u-xmlrpc \
        php70u-mbstring \
        php70u-pear \
        php70u-pecl-memcached \
        php70u-devel \
        php70u-pdo \
        php70u-soap \
        php70u-process \
        php70u-pecl-igbinary \
        php70u-opcache \
        php70u-devel \
        zlib-devel \
        curl-devel \
        gcc

RUN yum install -y mod_php70u mod_ssl
RUN yum install -y libyaml-devel
RUN yum clean all

RUN pecl channel-update pecl.php.net
RUN printf "\n" | pecl install yaml

RUN chown apache:apache /var/www/html
RUN chmod g+s /var/www/html
RUN echo "IncludeOptional sites-enabled/*.conf" >> /etc/httpd/conf/httpd.conf

COPY vhost.conf /etc/httpd/sites-enabled/whmcs.conf
COPY php.ini /etc/php.ini

RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer
RUN usermod -u 1000 apache && ln -sf /dev/stdout /var/log/httpd/access_log && ln -sf /dev/stderr /var/log/httpd/error_log
RUN unlink /etc/localtime && ln -s /usr/share/zoneinfo/Australia/Sydney /etc/localtime

COPY supervisord.conf /etc/supervisord.conf

EXPOSE 80

# CMD ["/usr/sbin/httpd", "-DFOREGROUND"]
CMD ["/usr/bin/supervisord"]