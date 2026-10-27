import { createFileRoute, ClientOnly } from '@tanstack/react-router';
import { Table } from '../components/Table';
export const Route = createFileRoute('/zz-preview-table')({ component: () => <ClientOnly><div style={{height:'100dvh'}}><Table /></div></ClientOnly> });
