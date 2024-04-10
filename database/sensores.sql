--
-- PostgreSQL database cluster dump
--

-- Started on 2024-04-06 08:22:27

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS;

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-04-06 08:22:27

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2024-04-06 08:22:28

--
-- PostgreSQL database dump complete
--

--
-- Database "farmtech" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-04-06 08:22:28

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4839 (class 1262 OID 16397)
-- Name: farmtech; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE farmtech WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';


ALTER DATABASE farmtech OWNER TO postgres;

\connect farmtech

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16399)
-- Name: propriedade; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.propriedade (
    id_propriedade integer NOT NULL,
    nome character varying(100)
);


ALTER TABLE public.propriedade OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16398)
-- Name: propriedade_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.propriedade_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.propriedade_seq OWNER TO postgres;

--
-- TOC entry 4833 (class 0 OID 16399)
-- Dependencies: 216
-- Data for Name: propriedade; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.propriedade (id_propriedade, nome) FROM stdin;
\.


--
-- TOC entry 4840 (class 0 OID 0)
-- Dependencies: 215
-- Name: propriedade_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.propriedade_seq', 1, false);


-- Completed on 2024-04-06 08:22:28

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-04-06 08:22:28

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 4833 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


-- Completed on 2024-04-06 08:22:28

--
-- PostgreSQL database dump complete
--

--
-- Database "sensores" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-04-06 08:22:28

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4855 (class 1262 OID 16402)
-- Name: sensores; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE sensores WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';


ALTER DATABASE sensores OWNER TO postgres;

\connect sensores

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 215 (class 1259 OID 16403)
-- Name: sensor_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sensor_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sensor_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16404)
-- Name: sensor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sensor (
    id integer DEFAULT nextval('public.sensor_seq'::regclass) NOT NULL,
    "_nomeSensor" character varying(100) NOT NULL,
    _localizacao character varying(100) NOT NULL,
    tipo_sensor_id integer,
    "_dataInstalacao" character varying(50)
);


ALTER TABLE public.sensor OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16422)
-- Name: sensor_tipo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sensor_tipo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sensor_tipo_seq OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16408)
-- Name: sensor_tipo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sensor_tipo (
    id integer DEFAULT nextval('public.sensor_tipo_seq'::regclass) NOT NULL,
    tipo character varying(100)
);


ALTER TABLE public.sensor_tipo OWNER TO postgres;

--
-- TOC entry 4847 (class 0 OID 16404)
-- Dependencies: 216
-- Data for Name: sensor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sensor (id, "_nomeSensor", _localizacao, tipo_sensor_id, "_dataInstalacao") FROM stdin;
21	Sensor 2	Quarto	10	2024-03-02T03:00:00.000Z
20	Sensor 1	Casa	11	2024-03-01T03:00:00.000Z
32	Sensor 3	Sotão	12	2024-03-20T03:00:00.000Z
33	Sensor 4	Lago	14	2024-03-08T03:00:00.000Z
\.


--
-- TOC entry 4848 (class 0 OID 16408)
-- Dependencies: 217
-- Data for Name: sensor_tipo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sensor_tipo (id, tipo) FROM stdin;
9	Temperatura
10	Umidade
11	Chuva
12	Pressão
13	Luminosidade
14	Gás
15	Umidade Solo
\.


--
-- TOC entry 4856 (class 0 OID 0)
-- Dependencies: 215
-- Name: sensor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sensor_seq', 33, true);


--
-- TOC entry 4857 (class 0 OID 0)
-- Dependencies: 218
-- Name: sensor_tipo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sensor_tipo_seq', 15, true);


--
-- TOC entry 4697 (class 2606 OID 16416)
-- Name: sensor sensor_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sensor
    ADD CONSTRAINT sensor_pk PRIMARY KEY (id);


--
-- TOC entry 4699 (class 2606 OID 16412)
-- Name: sensor_tipo sensor_tipo_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sensor_tipo
    ADD CONSTRAINT sensor_tipo_pk PRIMARY KEY (id);


--
-- TOC entry 4701 (class 2606 OID 16414)
-- Name: sensor_tipo sensor_tipo_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sensor_tipo
    ADD CONSTRAINT sensor_tipo_unique UNIQUE (tipo);


--
-- TOC entry 4702 (class 2606 OID 16433)
-- Name: sensor sensor_sensor_tipo_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sensor
    ADD CONSTRAINT sensor_sensor_tipo_fk FOREIGN KEY (tipo_sensor_id) REFERENCES public.sensor_tipo(id);


-- Completed on 2024-04-06 08:22:28

--
-- PostgreSQL database dump complete
--

-- Completed on 2024-04-06 08:22:28

--
-- PostgreSQL database cluster dump complete
--

